import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-latin-america');
}

export default function EternalOdysseyPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-latin-america" />;
}
