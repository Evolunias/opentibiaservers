import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-with-reviews-server');
}

export default function Tibiantis13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-with-reviews-server" />;
}
