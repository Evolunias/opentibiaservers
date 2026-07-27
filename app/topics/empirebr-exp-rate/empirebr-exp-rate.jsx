import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-exp-rate');
}

export default function EmpirebrExpRateKeywordPage() {
  return <StaticKeywordPage slug="empirebr-exp-rate" />;
}
