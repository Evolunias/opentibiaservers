import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-exp-rate');
}

export default function ClassicusExpRateKeywordPage() {
  return <StaticKeywordPage slug="classicus-exp-rate" />;
}
