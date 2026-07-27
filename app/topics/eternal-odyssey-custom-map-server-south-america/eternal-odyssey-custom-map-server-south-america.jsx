import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-south-america');
}

export default function EternalOdysseyCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-south-america" />;
}
