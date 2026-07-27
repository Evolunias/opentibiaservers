import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-13-old-school-server');
}

export default function EternalOdyssey13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-13-old-school-server" />;
}
