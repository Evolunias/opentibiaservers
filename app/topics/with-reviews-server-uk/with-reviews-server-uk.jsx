import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-uk');
}

export default function WithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-uk" />;
}
