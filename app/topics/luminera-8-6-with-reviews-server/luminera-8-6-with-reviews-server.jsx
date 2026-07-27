import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-6-with-reviews-server');
}

export default function Luminera86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-6-with-reviews-server" />;
}
