import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-rubinot-client');
}

export default function TopRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="top-rubinot-client" />;
}
