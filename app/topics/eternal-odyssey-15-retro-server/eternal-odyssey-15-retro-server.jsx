import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-retro-server');
}

export default function EternalOdyssey15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-retro-server" />;
}
