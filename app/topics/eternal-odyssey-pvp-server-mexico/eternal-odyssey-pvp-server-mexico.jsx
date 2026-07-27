import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-mexico');
}

export default function EternalOdysseyPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-mexico" />;
}
