import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-guide');
}

export default function WithReviewsTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-guide" />;
}
