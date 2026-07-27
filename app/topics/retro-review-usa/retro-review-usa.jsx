import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-usa');
}

export default function RetroReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-review-usa" />;
}
