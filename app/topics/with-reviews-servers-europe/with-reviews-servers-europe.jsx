import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-europe');
}

export default function WithReviewsServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-europe" />;
}
