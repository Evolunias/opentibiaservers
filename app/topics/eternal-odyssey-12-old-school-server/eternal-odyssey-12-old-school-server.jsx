import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-12-old-school-server');
}

export default function EternalOdyssey12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-12-old-school-server" />;
}
