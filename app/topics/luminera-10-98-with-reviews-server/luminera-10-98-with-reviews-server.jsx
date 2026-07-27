import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-98-with-reviews-server');
}

export default function Luminera1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-98-with-reviews-server" />;
}
