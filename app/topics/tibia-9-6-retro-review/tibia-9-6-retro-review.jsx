import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-retro-review');
}

export default function Tibia96RetroReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-retro-review" />;
}
