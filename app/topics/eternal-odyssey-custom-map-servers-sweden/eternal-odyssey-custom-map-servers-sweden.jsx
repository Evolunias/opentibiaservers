import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternal-odyssey-custom-map-servers-sweden');
}

export default function EternalOdysseyCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="eternal-odyssey-custom-map-servers-sweden" />;
}
