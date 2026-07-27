import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-7-6-with-reviews-server');
}

export default function Nilot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="nilot-7-6-with-reviews-server" />;
}
