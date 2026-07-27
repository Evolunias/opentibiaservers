import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-poland');
}

export default function NilotWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-poland" />;
}
