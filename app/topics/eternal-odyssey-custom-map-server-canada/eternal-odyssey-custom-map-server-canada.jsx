import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-canada');
}

export default function EternalOdysseyCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-canada" />;
}
