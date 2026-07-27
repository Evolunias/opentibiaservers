import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-quests');
}

export default function EternalOdysseyQuestsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-quests" />;
}
