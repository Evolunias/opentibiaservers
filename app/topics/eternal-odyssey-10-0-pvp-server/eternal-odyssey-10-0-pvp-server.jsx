import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-10-0-pvp-server');
}

export default function EternalOdyssey100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-10-0-pvp-server" />;
}
