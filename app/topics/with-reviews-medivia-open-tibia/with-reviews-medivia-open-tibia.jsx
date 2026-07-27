import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-open-tibia');
}

export default function WithReviewsMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-open-tibia" />;
}
