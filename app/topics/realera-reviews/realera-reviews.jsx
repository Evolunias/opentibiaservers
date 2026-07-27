import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-reviews');
}

export default function RealeraReviewsKeywordPage() {
  return <StaticKeywordPage slug="realera-reviews" />;
}
