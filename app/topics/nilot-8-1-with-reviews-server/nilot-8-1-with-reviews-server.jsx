import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-1-with-reviews-server');
}

export default function Nilot81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-1-with-reviews-server" />;
}
