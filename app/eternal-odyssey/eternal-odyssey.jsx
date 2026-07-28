import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('eternal-odyssey');
}

export default function EternalOdysseyPage() {
  return <StaticExactMatchPage slug="eternal-odyssey" />;
}
