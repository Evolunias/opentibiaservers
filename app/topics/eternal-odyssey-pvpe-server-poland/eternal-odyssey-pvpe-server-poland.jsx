import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvpe-server-poland');
}

export default function EternalOdysseyPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvpe-server-poland" />;
}
