import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-review-france');
}

export default function RetroReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-review-france" />;
}
