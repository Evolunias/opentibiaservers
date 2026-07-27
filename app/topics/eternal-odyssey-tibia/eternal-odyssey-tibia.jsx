import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-tibia');
}

export default function EternalOdysseyTibiaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-tibia" />;
}
