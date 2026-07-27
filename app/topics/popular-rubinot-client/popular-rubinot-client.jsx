import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-client');
}

export default function PopularRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-client" />;
}
