import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-brazil');
}

export default function NilotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-brazil" />;
}
