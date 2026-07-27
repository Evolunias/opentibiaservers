import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-uk');
}

export default function DemolidoresWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-uk" />;
}
