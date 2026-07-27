import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-pvp-server');
}

export default function EternalOdyssey12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-pvp-server" />;
}
