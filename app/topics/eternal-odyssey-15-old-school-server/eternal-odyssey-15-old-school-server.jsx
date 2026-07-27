import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-15-old-school-server');
}

export default function EternalOdyssey15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-15-old-school-server" />;
}
