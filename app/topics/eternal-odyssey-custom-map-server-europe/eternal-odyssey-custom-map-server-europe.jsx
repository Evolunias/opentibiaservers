import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-europe');
}

export default function EternalOdysseyCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-europe" />;
}
