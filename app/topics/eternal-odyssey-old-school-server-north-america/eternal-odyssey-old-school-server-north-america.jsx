import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-north-america');
}

export default function EternalOdysseyOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-north-america" />;
}
