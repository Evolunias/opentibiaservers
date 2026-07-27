import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-north-america');
}

export default function EternalOdysseyNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-north-america" />;
}
