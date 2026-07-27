import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-latin-america-servers');
}

export default function EternalOdysseyLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-latin-america-servers" />;
}
