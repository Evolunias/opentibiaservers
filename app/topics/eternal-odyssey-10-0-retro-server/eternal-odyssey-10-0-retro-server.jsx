import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-10-0-retro-server');
}

export default function EternalOdyssey100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-10-0-retro-server" />;
}
