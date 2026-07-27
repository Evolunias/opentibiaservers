import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-reviews');
}

export default function OtlandServerGalaReviewsKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-reviews" />;
}
