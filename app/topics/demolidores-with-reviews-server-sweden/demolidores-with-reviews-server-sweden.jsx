import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-reviews-server-sweden');
}

export default function DemolidoresWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-reviews-server-sweden" />;
}
