import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-server-europe');
}

export default function RubinotRealMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-server-europe" />;
}
