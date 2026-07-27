import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-servers-canada');
}

export default function WithReviewsServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-servers-canada" />;
}
