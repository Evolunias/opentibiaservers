import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-europe');
}

export default function RubinotRealMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-europe" />;
}
