import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-sweden');
}

export default function MiracleRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-sweden" />;
}
