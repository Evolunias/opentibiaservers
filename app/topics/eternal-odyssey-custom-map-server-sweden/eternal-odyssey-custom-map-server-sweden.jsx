import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-sweden');
}

export default function EternalOdysseyCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-sweden" />;
}
