import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-luminera-open-tibia');
}

export default function WithReviewsLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-luminera-open-tibia" />;
}
