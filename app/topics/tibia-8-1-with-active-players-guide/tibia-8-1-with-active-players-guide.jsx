import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-with-active-players-guide');
}

export default function Tibia81WithActivePlayersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-with-active-players-guide" />;
}
