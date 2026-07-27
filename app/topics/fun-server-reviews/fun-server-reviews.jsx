import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-reviews');
}

export default function FunServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="fun-server-reviews" />;
}
