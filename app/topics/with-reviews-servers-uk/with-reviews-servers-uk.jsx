import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-uk');
}

export default function WithReviewsServersUkKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-uk" />;
}
