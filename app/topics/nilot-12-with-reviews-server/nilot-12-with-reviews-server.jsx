import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-12-with-reviews-server');
}

export default function Nilot12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-12-with-reviews-server" />;
}
