import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-10-0-evo-server');
}

export default function EternalOdyssey100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-10-0-evo-server" />;
}
