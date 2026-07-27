import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-review-europe');
}

export default function EvoReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-review-europe" />;
}
