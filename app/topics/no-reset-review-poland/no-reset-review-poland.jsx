import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-poland');
}

export default function NoResetReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-poland" />;
}
