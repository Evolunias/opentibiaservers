import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-argentina');
}

export default function EternalOdysseyCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-argentina" />;
}
