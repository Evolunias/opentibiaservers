import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-open-tibia');
}

export default function WithReviewsNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-open-tibia" />;
}
