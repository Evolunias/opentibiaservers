import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-servers-poland');
}

export default function EternalOdysseyCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-servers-poland" />;
}
