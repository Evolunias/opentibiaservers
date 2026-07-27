import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-reviews');
}

export default function EmpirebrReviewsKeywordPage() {
  return <StaticKeywordPage slug="empirebr-reviews" />;
}
