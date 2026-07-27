import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-register');
}

export default function EternalOdysseyRegisterKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-register" />;
}
