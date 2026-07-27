import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-custom-map-servers-sweden');
}

export default function ThaisotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="thaisot-custom-map-servers-sweden" />;
}
