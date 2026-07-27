import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-similar-servers');
}

export default function EternalOdysseySimilarServersKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-similar-servers" />;
}
