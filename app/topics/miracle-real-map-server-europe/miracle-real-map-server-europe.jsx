import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-real-map-server-europe');
}

export default function MiracleRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-real-map-server-europe" />;
}
