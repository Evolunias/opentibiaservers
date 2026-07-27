import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-12-with-reviews-server');
}

export default function Blazera12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-12-with-reviews-server" />;
}
