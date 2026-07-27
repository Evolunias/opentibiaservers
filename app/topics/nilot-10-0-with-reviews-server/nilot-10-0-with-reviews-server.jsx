import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-10-0-with-reviews-server');
}

export default function Nilot100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-10-0-with-reviews-server" />;
}
