import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-reviews');
}

export default function ThorniaReviewsKeywordPage() {
  return <StaticKeywordPage slug="thornia-reviews" />;
}
