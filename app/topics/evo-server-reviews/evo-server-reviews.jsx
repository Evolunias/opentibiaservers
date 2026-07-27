import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-reviews');
}

export default function EvoServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="evo-server-reviews" />;
}
