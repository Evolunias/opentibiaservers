import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-south-america');
}

export default function NoResetReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-south-america" />;
}
