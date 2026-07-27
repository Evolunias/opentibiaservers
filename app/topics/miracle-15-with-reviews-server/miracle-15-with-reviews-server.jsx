import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-with-reviews-server');
}

export default function Miracle15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-with-reviews-server" />;
}
