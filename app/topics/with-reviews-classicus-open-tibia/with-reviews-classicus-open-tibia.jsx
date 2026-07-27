import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classicus-open-tibia');
}

export default function WithReviewsClassicusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classicus-open-tibia" />;
}
