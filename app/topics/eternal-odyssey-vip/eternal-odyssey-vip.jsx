import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-vip');
}

export default function EternalOdysseyVipKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-vip" />;
}
