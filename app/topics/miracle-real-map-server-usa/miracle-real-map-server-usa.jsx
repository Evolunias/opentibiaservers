import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-usa');
}

export default function MiracleRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-usa" />;
}
