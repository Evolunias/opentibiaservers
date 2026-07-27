import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-server-chile');
}

export default function EternalOdysseyCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-server-chile" />;
}
