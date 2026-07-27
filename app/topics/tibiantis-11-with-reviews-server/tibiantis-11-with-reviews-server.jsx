import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-with-reviews-server');
}

export default function Tibiantis11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-with-reviews-server" />;
}
