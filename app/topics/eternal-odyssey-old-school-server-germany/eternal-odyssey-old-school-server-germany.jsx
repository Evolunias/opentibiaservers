import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-germany');
}

export default function EternalOdysseyOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-germany" />;
}
