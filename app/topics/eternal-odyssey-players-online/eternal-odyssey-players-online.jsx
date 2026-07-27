import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-players-online');
}

export default function EternalOdysseyPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-players-online" />;
}
