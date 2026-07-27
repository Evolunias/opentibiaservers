import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-baiak-server-argentina');
}

export default function EternalOdysseyBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-baiak-server-argentina" />;
}
