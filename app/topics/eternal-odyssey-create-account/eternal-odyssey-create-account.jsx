import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-create-account');
}

export default function EternalOdysseyCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-create-account" />;
}
