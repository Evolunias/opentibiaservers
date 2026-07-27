import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-reviews');
}

export default function TibijkaReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibijka-reviews" />;
}
