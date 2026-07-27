import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-fun-server');
}

export default function EternalOdysseyFunServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-fun-server" />;
}
