import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-exp-rate');
}

export default function NilotExpRateKeywordPage() {
  return <StaticKeywordPage slug="nilot-exp-rate" />;
}
