import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-real-map-servers-sweden');
}

export default function MarolaotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-real-map-servers-sweden" />;
}
