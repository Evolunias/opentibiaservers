import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-real-map');
}

export default function EternalOdysseyRealMapKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-real-map" />;
}
