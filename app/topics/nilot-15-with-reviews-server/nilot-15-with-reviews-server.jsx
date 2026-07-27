import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-15-with-reviews-server');
}

export default function Nilot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-15-with-reviews-server" />;
}
