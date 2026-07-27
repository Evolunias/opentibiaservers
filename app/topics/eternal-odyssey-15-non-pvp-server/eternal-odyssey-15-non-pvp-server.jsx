import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-non-pvp-server');
}

export default function EternalOdyssey15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-non-pvp-server" />;
}
