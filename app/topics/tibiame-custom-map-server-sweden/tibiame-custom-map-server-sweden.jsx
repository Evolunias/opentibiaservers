import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-custom-map-server-sweden');
}

export default function TibiameCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-custom-map-server-sweden" />;
}
