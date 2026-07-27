import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-evo-server');
}

export default function EternalOdyssey15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-evo-server" />;
}
