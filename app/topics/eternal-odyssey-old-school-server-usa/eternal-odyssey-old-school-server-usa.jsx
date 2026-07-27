import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-usa');
}

export default function EternalOdysseyOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-usa" />;
}
