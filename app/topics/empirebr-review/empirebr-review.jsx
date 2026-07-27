import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-review');
}

export default function EmpirebrReviewKeywordPage() {
  return <StaticKeywordPage slug="empirebr-review" />;
}
