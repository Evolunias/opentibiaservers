import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-uptime');
}

export default function EternalOdysseyUptimeKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-uptime" />;
}
