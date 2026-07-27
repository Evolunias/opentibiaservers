import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-14-with-reviews-server');
}

export default function Nilot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-14-with-reviews-server" />;
}
