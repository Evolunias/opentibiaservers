import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-north-america-servers');
}

export default function EternalOdysseyNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-north-america-servers" />;
}
