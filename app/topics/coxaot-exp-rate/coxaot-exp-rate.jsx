import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-exp-rate');
}

export default function CoxaotExpRateKeywordPage() {
  return <StaticKeywordPage slug="coxaot-exp-rate" />;
}
