import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-exp-rate');
}

export default function TibiaraExpRateKeywordPage() {
  return <StaticKeywordPage slug="tibiara-exp-rate" />;
}
