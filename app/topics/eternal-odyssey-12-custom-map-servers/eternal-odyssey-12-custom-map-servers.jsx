import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-custom-map-servers');
}

export default function EternalOdyssey12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-custom-map-servers" />;
}
