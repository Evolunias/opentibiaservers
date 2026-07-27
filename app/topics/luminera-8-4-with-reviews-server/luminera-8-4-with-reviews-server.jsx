import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-with-reviews-server');
}

export default function Luminera84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-with-reviews-server" />;
}
