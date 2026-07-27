import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-11-non-pvp-server');
}

export default function EternalOdyssey11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-11-non-pvp-server" />;
}
