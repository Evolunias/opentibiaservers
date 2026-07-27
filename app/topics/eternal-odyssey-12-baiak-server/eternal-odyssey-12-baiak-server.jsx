import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-baiak-server');
}

export default function EternalOdyssey12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-baiak-server" />;
}
