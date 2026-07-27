import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-canada');
}

export default function NilotWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-canada" />;
}
