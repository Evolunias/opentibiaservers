import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-chile-server');
}

export default function EternalOdysseyChileServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-chile-server" />;
}
