import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-north-america');
}

export default function NilotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-north-america" />;
}
