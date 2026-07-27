import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-exp-rate');
}

export default function RangerSArcaniExpRateKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-exp-rate" />;
}
