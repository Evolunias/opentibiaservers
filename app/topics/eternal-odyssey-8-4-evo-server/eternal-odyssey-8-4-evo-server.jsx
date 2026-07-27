import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-4-evo-server');
}

export default function EternalOdyssey84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-4-evo-server" />;
}
