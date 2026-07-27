import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-map');
}

export default function EternalOdysseyMapKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-map" />;
}
