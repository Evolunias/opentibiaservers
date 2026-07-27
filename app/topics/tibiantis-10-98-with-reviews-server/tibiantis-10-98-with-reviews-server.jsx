import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-10-98-with-reviews-server');
}

export default function Tibiantis1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-10-98-with-reviews-server" />;
}
