import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-north-america');
}

export default function EternalOdysseyCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-north-america" />;
}
