import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-online');
}

export default function EternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-online" />;
}
