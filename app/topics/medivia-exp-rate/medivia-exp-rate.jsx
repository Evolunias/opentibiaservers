import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-exp-rate');
}

export default function MediviaExpRateKeywordPage() {
  return <StaticKeywordPage slug="medivia-exp-rate" />;
}
