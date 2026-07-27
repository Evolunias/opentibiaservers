import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-retro-review');
}

export default function Tibia11RetroReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-retro-review" />;
}
