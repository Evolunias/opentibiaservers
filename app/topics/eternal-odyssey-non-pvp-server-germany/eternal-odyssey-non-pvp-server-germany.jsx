import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-germany');
}

export default function EternalOdysseyNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-germany" />;
}
