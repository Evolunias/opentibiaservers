import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-chile');
}

export default function EternalOdysseyPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-chile" />;
}
