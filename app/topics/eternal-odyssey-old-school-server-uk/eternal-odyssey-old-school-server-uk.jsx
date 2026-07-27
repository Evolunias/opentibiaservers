import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-uk');
}

export default function EternalOdysseyOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-uk" />;
}
