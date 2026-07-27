import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-germany');
}

export default function EternalOdysseyRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-germany" />;
}
