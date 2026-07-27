import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-canob-ots');
}

export default function WithReviewsCanobOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-canob-ots" />;
}
