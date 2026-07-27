import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-10-0-old-school-server');
}

export default function EternalOdyssey100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-10-0-old-school-server" />;
}
