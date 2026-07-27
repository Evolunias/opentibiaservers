import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-north-america');
}

export default function NoResetReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-north-america" />;
}
