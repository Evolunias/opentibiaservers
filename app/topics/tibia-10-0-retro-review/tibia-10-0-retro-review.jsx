import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-review');
}

export default function Tibia100RetroReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-review" />;
}
