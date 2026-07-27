import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-9-6-pvp-server');
}

export default function EternalOdyssey96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-9-6-pvp-server" />;
}
