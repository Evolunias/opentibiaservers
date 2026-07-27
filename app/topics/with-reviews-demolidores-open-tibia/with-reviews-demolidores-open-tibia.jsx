import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-open-tibia');
}

export default function WithReviewsDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-open-tibia" />;
}
