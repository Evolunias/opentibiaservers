import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-sweden');
}

export default function RetroReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-review-sweden" />;
}
