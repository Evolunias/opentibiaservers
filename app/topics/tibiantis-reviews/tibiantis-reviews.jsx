import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-reviews');
}

export default function TibiantisReviewsKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-reviews" />;
}
