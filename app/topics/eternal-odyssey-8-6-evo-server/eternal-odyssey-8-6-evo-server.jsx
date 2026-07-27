import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-6-evo-server');
}

export default function EternalOdyssey86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-6-evo-server" />;
}
