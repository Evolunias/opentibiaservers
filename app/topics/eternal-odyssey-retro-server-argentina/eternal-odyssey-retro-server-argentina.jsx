import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-argentina');
}

export default function EternalOdysseyRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-argentina" />;
}
