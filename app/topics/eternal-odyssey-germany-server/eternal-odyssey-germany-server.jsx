import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-germany-server');
}

export default function EternalOdysseyGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-germany-server" />;
}
