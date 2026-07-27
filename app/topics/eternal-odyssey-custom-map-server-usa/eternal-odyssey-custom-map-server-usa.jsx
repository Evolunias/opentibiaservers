import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-usa');
}

export default function EternalOdysseyCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-usa" />;
}
