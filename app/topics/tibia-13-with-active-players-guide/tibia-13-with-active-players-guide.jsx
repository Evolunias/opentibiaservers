import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-active-players-guide');
}

export default function Tibia13WithActivePlayersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-active-players-guide" />;
}
