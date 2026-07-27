import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-4-with-reviews-server');
}

export default function Luminera74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-4-with-reviews-server" />;
}
