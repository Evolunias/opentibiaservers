import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-11-custom-map-servers');
}

export default function EternalOdyssey11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-11-custom-map-servers" />;
}
