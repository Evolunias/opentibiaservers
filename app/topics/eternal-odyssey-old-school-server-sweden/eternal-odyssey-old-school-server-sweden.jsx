import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-old-school-server-sweden');
}

export default function EternalOdysseyOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-old-school-server-sweden" />;
}
