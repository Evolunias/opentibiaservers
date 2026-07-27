import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-custom-map-servers-sweden');
}

export default function TibijkaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-custom-map-servers-sweden" />;
}
