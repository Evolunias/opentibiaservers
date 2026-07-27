import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-98-with-reviews-server');
}

export default function Evolunia1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-98-with-reviews-server" />;
}
