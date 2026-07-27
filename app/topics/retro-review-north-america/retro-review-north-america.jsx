import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-north-america');
}

export default function RetroReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-review-north-america" />;
}
