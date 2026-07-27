import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-13-with-reviews-server');
}

export default function Nilot13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-13-with-reviews-server" />;
}
