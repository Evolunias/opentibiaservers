import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob');
}

export default function WithReviewsCanobKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob" />;
}
