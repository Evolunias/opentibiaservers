import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-real-map-servers-sweden');
}

export default function TibijkaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-real-map-servers-sweden" />;
}
