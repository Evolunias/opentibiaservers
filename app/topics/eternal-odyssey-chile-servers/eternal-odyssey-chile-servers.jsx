import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-chile-servers');
}

export default function EternalOdysseyChileServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-chile-servers" />;
}
