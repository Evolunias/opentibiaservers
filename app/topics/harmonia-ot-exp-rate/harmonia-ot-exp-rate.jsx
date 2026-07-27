import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-exp-rate');
}

export default function HarmoniaOtExpRateKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-exp-rate" />;
}
