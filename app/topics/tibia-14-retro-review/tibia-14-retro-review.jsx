import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-retro-review');
}

export default function Tibia14RetroReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-retro-review" />;
}
