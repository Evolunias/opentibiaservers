import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-europe');
}

export default function NilotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-europe" />;
}
