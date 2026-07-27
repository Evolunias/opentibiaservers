import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-mexico');
}

export default function NilotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-mexico" />;
}
