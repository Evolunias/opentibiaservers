import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-with-reviews-server-sweden');
}

export default function OtmadnessWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="otmadness-with-reviews-server-sweden" />;
}
