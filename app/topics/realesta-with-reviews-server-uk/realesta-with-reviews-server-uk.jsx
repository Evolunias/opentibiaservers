import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-uk');
}

export default function RealestaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-uk" />;
}
