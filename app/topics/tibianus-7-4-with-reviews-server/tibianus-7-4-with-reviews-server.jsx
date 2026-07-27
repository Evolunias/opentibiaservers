import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-with-reviews-server');
}

export default function Tibianus74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-with-reviews-server" />;
}
