import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-10-0-custom-map-server');
}

export default function EternalOdyssey100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-10-0-custom-map-server" />;
}
