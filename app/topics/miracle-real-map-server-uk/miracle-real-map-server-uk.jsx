import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-uk');
}

export default function MiracleRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-uk" />;
}
