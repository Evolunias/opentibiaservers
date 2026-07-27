import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-mexico');
}

export default function RetroReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-review-mexico" />;
}
