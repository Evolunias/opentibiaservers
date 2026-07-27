import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-with-reviews-server');
}

export default function Tibiantis14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-with-reviews-server" />;
}
