import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-tibia');
}

export default function WithReviewsNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-tibia" />;
}
