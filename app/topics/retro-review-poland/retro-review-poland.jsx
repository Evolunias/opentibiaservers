import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-poland');
}

export default function RetroReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-review-poland" />;
}
