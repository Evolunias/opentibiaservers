import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-open-tibia');
}

export default function WithReviewsMidhemOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-open-tibia" />;
}
