import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-midhem-tibia');
}

export default function WithReviewsMidhemTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-midhem-tibia" />;
}
