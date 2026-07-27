import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-canada');
}

export default function EternalOdysseyNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-canada" />;
}
