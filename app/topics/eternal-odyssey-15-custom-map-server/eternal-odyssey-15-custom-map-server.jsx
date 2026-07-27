import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-custom-map-server');
}

export default function EternalOdyssey15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-custom-map-server" />;
}
