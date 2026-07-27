import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-reviews');
}

export default function NostaltherReviewsKeywordPage() {
  return <StaticKeywordPage slug="nostalther-reviews" />;
}
