import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-usa');
}

export default function DemolidoresWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-usa" />;
}
