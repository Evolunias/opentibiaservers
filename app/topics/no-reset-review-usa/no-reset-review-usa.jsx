import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-usa');
}

export default function NoResetReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-usa" />;
}
