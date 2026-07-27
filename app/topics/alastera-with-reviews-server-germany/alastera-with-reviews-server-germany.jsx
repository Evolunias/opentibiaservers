import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-germany');
}

export default function AlasteraWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-germany" />;
}
