import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-argentina');
}

export default function EternalOdysseyOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-argentina" />;
}
