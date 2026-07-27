import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-client');
}

export default function LowrateRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-client" />;
}
