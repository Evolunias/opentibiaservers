import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-brazil');
}

export default function RetroReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-review-brazil" />;
}
