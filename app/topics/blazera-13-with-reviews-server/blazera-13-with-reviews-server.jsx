import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-with-reviews-server');
}

export default function Blazera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-with-reviews-server" />;
}
