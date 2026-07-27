import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-server-south-america');
}

export default function WithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-server-south-america" />;
}
