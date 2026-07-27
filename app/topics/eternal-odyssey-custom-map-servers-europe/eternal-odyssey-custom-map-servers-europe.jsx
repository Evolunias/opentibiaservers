import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-servers-europe');
}

export default function EternalOdysseyCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-servers-europe" />;
}
