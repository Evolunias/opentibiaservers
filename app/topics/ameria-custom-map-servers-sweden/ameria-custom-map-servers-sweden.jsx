import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-sweden');
}

export default function AmeriaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-sweden" />;
}
