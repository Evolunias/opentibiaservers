import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-ot');
}

export default function WithReviewsCanobOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-ot" />;
}
