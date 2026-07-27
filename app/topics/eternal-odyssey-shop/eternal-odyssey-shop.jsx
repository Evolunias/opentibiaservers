import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-shop');
}

export default function EternalOdysseyShopKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-shop" />;
}
