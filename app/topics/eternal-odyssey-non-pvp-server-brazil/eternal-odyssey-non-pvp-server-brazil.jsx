import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-brazil');
}

export default function EternalOdysseyNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-brazil" />;
}
