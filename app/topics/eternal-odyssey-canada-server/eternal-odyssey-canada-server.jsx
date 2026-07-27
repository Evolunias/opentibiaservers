import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-canada-server');
}

export default function EternalOdysseyCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-canada-server" />;
}
