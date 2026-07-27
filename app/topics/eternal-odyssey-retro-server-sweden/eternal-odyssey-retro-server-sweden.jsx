import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-retro-server-sweden');
}

export default function EternalOdysseyRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-retro-server-sweden" />;
}
