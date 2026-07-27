import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-south-america');
}

export default function RetroReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-review-south-america" />;
}
