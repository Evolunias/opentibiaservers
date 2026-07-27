import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-real-map-servers-sweden');
}

export default function ThaisotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-real-map-servers-sweden" />;
}
