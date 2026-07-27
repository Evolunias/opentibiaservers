import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-argentina');
}

export default function RealestaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-argentina" />;
}
