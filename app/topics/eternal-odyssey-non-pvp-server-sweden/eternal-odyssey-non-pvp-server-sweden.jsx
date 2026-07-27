import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-non-pvp-server-sweden');
}

export default function EternalOdysseyNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-non-pvp-server-sweden" />;
}
