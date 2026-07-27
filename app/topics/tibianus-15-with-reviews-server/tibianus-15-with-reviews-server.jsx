import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-with-reviews-server');
}

export default function Tibianus15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-with-reviews-server" />;
}
