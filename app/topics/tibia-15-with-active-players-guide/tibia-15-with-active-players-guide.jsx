import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-active-players-guide');
}

export default function Tibia15WithActivePlayersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-active-players-guide" />;
}
