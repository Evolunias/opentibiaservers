import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-7-1-non-pvp-server');
}

export default function EternalOdyssey71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-7-1-non-pvp-server" />;
}
