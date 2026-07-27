import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-rubinot-client');
}

export default function BestRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="best-rubinot-client" />;
}
