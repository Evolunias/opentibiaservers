import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-mist-of-death-tibia');
}

export default function WithReviewsMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-mist-of-death-tibia" />;
}
