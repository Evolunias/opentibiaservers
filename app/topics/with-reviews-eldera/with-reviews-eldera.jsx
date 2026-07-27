import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera');
}

export default function WithReviewsElderaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera" />;
}
