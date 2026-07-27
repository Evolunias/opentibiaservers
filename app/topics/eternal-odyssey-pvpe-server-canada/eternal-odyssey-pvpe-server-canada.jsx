import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-canada');
}

export default function EternalOdysseyPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-canada" />;
}
