import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-france');
}

export default function EternalOdysseyOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-france" />;
}
