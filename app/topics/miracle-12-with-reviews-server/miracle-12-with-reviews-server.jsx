import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-with-reviews-server');
}

export default function Miracle12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-with-reviews-server" />;
}
