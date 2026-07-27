import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-north-america-server');
}

export default function EternalOdysseyNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-north-america-server" />;
}
