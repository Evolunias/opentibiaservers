import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-reviews');
}

export default function UnlineReviewsKeywordPage() {
  return <StaticKeywordPage slug="unline-reviews" />;
}
