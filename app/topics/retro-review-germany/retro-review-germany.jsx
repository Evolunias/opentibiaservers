import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-germany');
}

export default function RetroReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-review-germany" />;
}
