import type { NextConfig } from 'next';

const REPOSITORY_NAME = 'zyxerus.github.io';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    assetPrefix: isProduction ? `/${REPOSITORY_NAME}/` : '',
    basePath: isProduction ? `/${REPOSITORY_NAME}` : '',
    output: 'export'
};

export default nextConfig;
