import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-exp-rate');
}

export default function BlazeraExpRateKeywordPage() {
  return <StaticKeywordPage slug="blazera-exp-rate" />;
}
