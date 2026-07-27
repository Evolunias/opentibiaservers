import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-open-tibia');
}

export default function EternalOdysseyOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-open-tibia" />;
}
