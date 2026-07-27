import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-bosses');
}

export default function EternalOdysseyBossesKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-bosses" />;
}
