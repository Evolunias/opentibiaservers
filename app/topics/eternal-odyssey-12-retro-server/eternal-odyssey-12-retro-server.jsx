import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-retro-server');
}

export default function EternalOdyssey12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-retro-server" />;
}
