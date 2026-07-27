import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-8-0-with-reviews-server');
}

export default function Nilot80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-8-0-with-reviews-server" />;
}
