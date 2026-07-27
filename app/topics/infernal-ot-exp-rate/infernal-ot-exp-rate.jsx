import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-exp-rate');
}

export default function InfernalOtExpRateKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-exp-rate" />;
}
