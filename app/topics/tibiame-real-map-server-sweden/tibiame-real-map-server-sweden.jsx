import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-sweden');
}

export default function TibiameRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-sweden" />;
}
