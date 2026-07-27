import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-poland');
}

export default function DemolidoresWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-poland" />;
}
