import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-9-6-non-pvp-server');
}

export default function EternalOdyssey96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-9-6-non-pvp-server" />;
}
