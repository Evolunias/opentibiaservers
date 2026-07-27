import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-europe');
}

export default function RetroReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-review-europe" />;
}
