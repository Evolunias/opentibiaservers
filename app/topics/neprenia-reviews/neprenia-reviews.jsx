import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-reviews');
}

export default function NepreniaReviewsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-reviews" />;
}
