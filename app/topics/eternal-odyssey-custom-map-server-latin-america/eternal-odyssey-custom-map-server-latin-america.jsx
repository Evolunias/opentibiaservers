import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-latin-america');
}

export default function EternalOdysseyCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-latin-america" />;
}
