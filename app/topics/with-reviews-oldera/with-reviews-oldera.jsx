import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera');
}

export default function WithReviewsOlderaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera" />;
}
