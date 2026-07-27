import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-germany');
}

export default function ThorniaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-germany" />;
}
