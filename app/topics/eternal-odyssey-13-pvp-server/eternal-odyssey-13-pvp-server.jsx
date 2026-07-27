import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-13-pvp-server');
}

export default function EternalOdyssey13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-13-pvp-server" />;
}
