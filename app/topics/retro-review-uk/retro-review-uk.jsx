import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-uk');
}

export default function RetroReviewUkKeywordPage() {
  return <StaticKeywordPage slug="retro-review-uk" />;
}
