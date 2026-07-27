import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-baiak-server');
}

export default function EternalOdyssey15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-baiak-server" />;
}
