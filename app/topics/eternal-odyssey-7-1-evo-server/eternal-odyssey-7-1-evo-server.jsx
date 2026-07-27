import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-7-1-evo-server');
}

export default function EternalOdyssey71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-7-1-evo-server" />;
}
