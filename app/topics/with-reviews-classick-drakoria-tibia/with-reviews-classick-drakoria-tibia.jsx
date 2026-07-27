import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-tibia');
}

export default function WithReviewsClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-tibia" />;
}
