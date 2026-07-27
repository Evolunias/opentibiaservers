import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-usa');
}

export default function EternalOdysseyPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-usa" />;
}
