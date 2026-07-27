import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-0-non-pvp-server');
}

export default function EternalOdyssey80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-0-non-pvp-server" />;
}
