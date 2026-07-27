import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-brazil');
}

export default function NoResetReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-brazil" />;
}
