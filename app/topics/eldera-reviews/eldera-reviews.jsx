import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-reviews');
}

export default function ElderaReviewsKeywordPage() {
  return <StaticKeywordPage slug="eldera-reviews" />;
}
