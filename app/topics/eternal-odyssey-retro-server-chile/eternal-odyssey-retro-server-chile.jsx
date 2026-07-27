import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-chile');
}

export default function EternalOdysseyRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-chile" />;
}
