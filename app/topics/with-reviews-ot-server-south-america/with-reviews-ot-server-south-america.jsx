import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ot-server-south-america');
}

export default function WithReviewsOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ot-server-south-america" />;
}
