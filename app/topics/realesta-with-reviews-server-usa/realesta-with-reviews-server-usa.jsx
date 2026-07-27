import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-usa');
}

export default function RealestaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-usa" />;
}
