import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-exp-rate');
}

export default function OxygenotExpRateKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-exp-rate" />;
}
