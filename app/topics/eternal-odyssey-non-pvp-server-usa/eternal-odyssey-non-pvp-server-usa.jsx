import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-usa');
}

export default function EternalOdysseyNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-usa" />;
}
