import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-6-with-reviews-server');
}

export default function Luminera76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-6-with-reviews-server" />;
}
