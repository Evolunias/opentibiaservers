import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther');
}

export default function WithReviewsNostaltherKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther" />;
}
