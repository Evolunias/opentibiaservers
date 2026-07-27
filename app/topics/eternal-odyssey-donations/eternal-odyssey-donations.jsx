import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-donations');
}

export default function EternalOdysseyDonationsKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-donations" />;
}
