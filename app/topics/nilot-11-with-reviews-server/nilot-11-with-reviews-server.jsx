import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-11-with-reviews-server');
}

export default function Nilot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-11-with-reviews-server" />;
}
