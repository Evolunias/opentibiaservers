import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-south-america-server');
}

export default function EternalOdysseySouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-south-america-server" />;
}
