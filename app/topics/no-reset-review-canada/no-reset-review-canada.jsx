import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-canada');
}

export default function NoResetReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-canada" />;
}
