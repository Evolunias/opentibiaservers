import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-reviews');
}

export default function OxygenotReviewsKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-reviews" />;
}
