import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-with-reviews-server');
}

export default function Luminera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-with-reviews-server" />;
}
