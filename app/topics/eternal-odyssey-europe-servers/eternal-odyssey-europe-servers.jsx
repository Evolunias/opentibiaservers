import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-europe-servers');
}

export default function EternalOdysseyEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-europe-servers" />;
}
