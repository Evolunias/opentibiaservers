import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-argentina');
}

export default function RetroReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-review-argentina" />;
}
