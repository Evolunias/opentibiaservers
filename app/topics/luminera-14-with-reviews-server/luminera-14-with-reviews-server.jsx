import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-with-reviews-server');
}

export default function Luminera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-with-reviews-server" />;
}
