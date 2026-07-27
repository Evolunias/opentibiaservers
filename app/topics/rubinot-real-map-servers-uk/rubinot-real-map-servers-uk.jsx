import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-uk');
}

export default function RubinotRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-uk" />;
}
