import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-reviews');
}

export default function OriginaltibiaReviewsKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-reviews" />;
}
