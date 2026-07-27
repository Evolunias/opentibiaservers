import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-evo-servers');
}

export default function EternalOdyssey12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-evo-servers" />;
}
