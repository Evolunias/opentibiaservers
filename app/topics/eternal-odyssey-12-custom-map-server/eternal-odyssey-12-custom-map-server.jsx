import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-custom-map-server');
}

export default function EternalOdyssey12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-custom-map-server" />;
}
