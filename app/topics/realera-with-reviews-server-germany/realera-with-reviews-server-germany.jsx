import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-with-reviews-server-germany');
}

export default function RealeraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-with-reviews-server-germany" />;
}
