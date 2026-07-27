import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-evo-server');
}

export default function EternalOdyssey12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-evo-server" />;
}
