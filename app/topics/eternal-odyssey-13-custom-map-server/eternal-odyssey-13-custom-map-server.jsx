import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-13-custom-map-server');
}

export default function EternalOdyssey13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-13-custom-map-server" />;
}
