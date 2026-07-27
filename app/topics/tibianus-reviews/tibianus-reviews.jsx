import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-reviews');
}

export default function TibianusReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibianus-reviews" />;
}
