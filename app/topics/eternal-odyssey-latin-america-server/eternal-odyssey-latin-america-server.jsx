import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-latin-america-server');
}

export default function EternalOdysseyLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-latin-america-server" />;
}
