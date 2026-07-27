import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-client');
}

export default function HighrateRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-client" />;
}
