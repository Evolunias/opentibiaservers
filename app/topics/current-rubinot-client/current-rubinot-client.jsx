import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-rubinot-client');
}

export default function CurrentRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="current-rubinot-client" />;
}
