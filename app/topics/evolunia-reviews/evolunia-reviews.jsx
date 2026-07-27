import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-reviews');
}

export default function EvoluniaReviewsKeywordPage() {
  return <StaticKeywordPage slug="evolunia-reviews" />;
}
