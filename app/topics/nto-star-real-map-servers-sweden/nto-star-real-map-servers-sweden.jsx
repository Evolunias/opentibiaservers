import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-real-map-servers-sweden');
}

export default function NtoStarRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="nto-star-real-map-servers-sweden" />;
}
