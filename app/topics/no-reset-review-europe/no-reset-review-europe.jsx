import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-review-europe');
}

export default function NoResetReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="no-reset-review-europe" />;
}
