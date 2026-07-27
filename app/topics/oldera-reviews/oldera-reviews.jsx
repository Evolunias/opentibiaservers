import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-reviews');
}

export default function OlderaReviewsKeywordPage() {
  return <StaticKeywordPage slug="oldera-reviews" />;
}
