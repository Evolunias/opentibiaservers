import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-7-1-custom-map-server');
}

export default function EternalOdyssey71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-7-1-custom-map-server" />;
}
