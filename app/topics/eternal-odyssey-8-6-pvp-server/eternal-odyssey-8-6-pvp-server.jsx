import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-6-pvp-server');
}

export default function EternalOdyssey86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-6-pvp-server" />;
}
