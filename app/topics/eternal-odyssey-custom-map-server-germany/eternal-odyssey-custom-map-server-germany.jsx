import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-germany');
}

export default function EternalOdysseyCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-germany" />;
}
