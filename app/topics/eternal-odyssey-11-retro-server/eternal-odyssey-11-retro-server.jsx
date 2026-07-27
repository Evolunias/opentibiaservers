import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-11-retro-server');
}

export default function EternalOdyssey11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-11-retro-server" />;
}
