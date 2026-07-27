import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-canada');
}

export default function RetroReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-review-canada" />;
}
