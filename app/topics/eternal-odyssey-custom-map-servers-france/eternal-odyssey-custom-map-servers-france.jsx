import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-servers-france');
}

export default function EternalOdysseyCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-servers-france" />;
}
