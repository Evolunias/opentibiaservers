import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-brazil');
}

export default function EternalOdysseyCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-brazil" />;
}
