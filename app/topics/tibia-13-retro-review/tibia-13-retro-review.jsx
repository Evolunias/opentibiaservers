import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-retro-review');
}

export default function Tibia13RetroReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-retro-review" />;
}
