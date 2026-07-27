import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-latin-america');
}

export default function RetroReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-review-latin-america" />;
}
