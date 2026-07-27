import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-exp-rate');
}

export default function ImperianicExpRateKeywordPage() {
  return <StaticKeywordPage slug="imperianic-exp-rate" />;
}
