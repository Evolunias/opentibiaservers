import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-with-reviews-server');
}

export default function Tibiantis12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-with-reviews-server" />;
}
