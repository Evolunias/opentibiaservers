import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-sweden');
}

export default function NoResetReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-sweden" />;
}
