import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-germany');
}

export default function DemolidoresWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-germany" />;
}
