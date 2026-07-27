import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-9-6-with-reviews-server');
}

export default function Luminera96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-9-6-with-reviews-server" />;
}
