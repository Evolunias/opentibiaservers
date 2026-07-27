import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-8-1-custom-map-server');
}

export default function EternalOdyssey81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-8-1-custom-map-server" />;
}
