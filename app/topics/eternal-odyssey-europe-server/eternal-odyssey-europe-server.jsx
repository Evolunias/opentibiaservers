import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-europe-server');
}

export default function EternalOdysseyEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-europe-server" />;
}
