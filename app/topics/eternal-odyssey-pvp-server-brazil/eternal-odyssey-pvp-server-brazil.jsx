import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-brazil');
}

export default function EternalOdysseyPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-brazil" />;
}
