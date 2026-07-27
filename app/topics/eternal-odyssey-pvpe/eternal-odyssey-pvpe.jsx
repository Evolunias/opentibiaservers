import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe');
}

export default function EternalOdysseyPvpeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe" />;
}
