import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-sweden');
}

export default function EternalOdysseyPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-sweden" />;
}
