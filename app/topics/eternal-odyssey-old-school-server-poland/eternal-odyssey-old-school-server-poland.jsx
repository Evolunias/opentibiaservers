import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-poland');
}

export default function EternalOdysseyOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-poland" />;
}
