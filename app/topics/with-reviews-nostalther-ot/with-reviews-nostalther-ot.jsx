import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-ot');
}

export default function WithReviewsNostaltherOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-ot" />;
}
