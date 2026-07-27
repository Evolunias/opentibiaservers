import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-pvp-server-south-america');
}

export default function EternalOdysseyPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-pvp-server-south-america" />;
}
