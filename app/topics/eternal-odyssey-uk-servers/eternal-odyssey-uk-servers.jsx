import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-uk-servers');
}

export default function EternalOdysseyUkServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-uk-servers" />;
}
