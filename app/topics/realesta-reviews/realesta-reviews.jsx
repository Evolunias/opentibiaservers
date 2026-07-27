import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-reviews');
}

export default function RealestaReviewsKeywordPage() {
  return <StaticKeywordPage slug="realesta-reviews" />;
}
