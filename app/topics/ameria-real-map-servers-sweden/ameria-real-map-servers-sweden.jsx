import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-sweden');
}

export default function AmeriaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-sweden" />;
}
