import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-with-reviews-server');
}

export default function Luminera81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-with-reviews-server" />;
}
