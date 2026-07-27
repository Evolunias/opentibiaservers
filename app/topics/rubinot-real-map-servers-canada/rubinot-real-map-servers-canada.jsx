import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-real-map-servers-canada');
}

export default function RubinotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-real-map-servers-canada" />;
}
