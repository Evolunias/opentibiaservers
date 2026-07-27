import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-client');
}

export default function RubinotClientKeywordPage() {
  return <StaticKeywordPage slug="rubinot-client" />;
}
