import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-servers-sweden');
}

export default function TibiameCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-servers-sweden" />;
}
