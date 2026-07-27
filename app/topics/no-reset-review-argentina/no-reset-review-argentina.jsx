import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-argentina');
}

export default function NoResetReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-argentina" />;
}
