import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-argentina');
}

export default function NilotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-argentina" />;
}
