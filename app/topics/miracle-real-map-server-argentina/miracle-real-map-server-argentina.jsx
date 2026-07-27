import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-argentina');
}

export default function MiracleRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-argentina" />;
}
