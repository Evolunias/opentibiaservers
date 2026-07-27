import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-reviews');
}

export default function MistOfDeathReviewsKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-reviews" />;
}
