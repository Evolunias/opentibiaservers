import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-uk');
}

export default function EternalOdysseyPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-uk" />;
}
