import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-uk');
}

export default function NoResetReviewUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-uk" />;
}
