import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-with-reviews-server-uk');
}

export default function ImperianicWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-with-reviews-server-uk" />;
}
