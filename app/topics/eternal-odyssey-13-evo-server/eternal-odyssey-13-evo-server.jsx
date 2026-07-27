import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-13-evo-server');
}

export default function EternalOdyssey13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-13-evo-server" />;
}
