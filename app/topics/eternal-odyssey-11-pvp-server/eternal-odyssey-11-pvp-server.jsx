import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-11-pvp-server');
}

export default function EternalOdyssey11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-11-pvp-server" />;
}
