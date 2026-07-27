import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-14-old-school-server');
}

export default function EternalOdyssey14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-14-old-school-server" />;
}
