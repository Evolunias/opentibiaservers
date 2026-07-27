import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-mexico');
}

export default function EternalOdysseyCustomMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-mexico" />;
}
