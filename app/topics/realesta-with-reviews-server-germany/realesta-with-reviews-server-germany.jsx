import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-germany');
}

export default function RealestaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-germany" />;
}
