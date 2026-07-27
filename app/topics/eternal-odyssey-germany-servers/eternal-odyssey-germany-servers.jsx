import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-germany-servers');
}

export default function EternalOdysseyGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-germany-servers" />;
}
