import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-brazil');
}

export default function EternalOdysseyRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-brazil" />;
}
