import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-custom-map-servers-sweden');
}

export default function MarolaotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="marolaot-custom-map-servers-sweden" />;
}
