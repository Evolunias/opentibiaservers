import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-sweden-server');
}

export default function EternalOdysseySwedenServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-sweden-server" />;
}
