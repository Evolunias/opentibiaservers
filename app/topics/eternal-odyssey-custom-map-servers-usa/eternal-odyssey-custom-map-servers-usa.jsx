import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-servers-usa');
}

export default function EternalOdysseyCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-servers-usa" />;
}
