import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-sweden');
}

export default function TibiameRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-sweden" />;
}
