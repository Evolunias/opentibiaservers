import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-poland');
}

export default function EternalOdysseyCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-poland" />;
}
