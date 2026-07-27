import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-reviews');
}

export default function MyaacReviewsKeywordPage() {
  return <StaticKeywordPage slug="myaac-reviews" />;
}
