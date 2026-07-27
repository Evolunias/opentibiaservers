import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-14-custom-map-server');
}

export default function EternalOdyssey14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-14-custom-map-server" />;
}
