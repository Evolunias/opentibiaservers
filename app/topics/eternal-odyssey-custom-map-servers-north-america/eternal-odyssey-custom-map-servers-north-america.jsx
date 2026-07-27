import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-servers-north-america');
}

export default function EternalOdysseyCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-servers-north-america" />;
}
