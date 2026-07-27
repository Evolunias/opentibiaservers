import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-exp-rate');
}

export default function ClassickDrakoriaExpRateKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-exp-rate" />;
}
