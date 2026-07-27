import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-uk');
}

export default function RubinotRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-uk" />;
}
