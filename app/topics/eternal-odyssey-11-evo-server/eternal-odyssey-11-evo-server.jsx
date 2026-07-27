import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-11-evo-server');
}

export default function EternalOdyssey11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-11-evo-server" />;
}
