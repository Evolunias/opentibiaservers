import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-launch');
}

export default function EternalOdysseyLaunchKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-launch" />;
}
