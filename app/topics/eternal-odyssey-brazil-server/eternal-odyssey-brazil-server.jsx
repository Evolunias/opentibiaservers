import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-brazil-server');
}

export default function EternalOdysseyBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-brazil-server" />;
}
