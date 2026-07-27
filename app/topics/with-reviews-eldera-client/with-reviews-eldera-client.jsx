import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-eldera-client');
}

export default function WithReviewsElderaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-eldera-client" />;
}
