import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-usa');
}

export default function NilotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-usa" />;
}
