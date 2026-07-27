import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-uk');
}

export default function NilotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-uk" />;
}
