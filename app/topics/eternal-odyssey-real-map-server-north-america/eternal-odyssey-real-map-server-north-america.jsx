import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-real-map-server-north-america');
}

export default function EternalOdysseyRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-real-map-server-north-america" />;
}
