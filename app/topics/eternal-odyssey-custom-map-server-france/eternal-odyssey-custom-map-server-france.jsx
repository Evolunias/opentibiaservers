import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-france');
}

export default function EternalOdysseyCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-france" />;
}
