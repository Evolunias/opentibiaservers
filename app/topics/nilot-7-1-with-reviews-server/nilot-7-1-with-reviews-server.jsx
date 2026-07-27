import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-1-with-reviews-server');
}

export default function Nilot71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-1-with-reviews-server" />;
}
