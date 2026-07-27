import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-with-active-players-guide');
}

export default function Tibia12WithActivePlayersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-with-active-players-guide" />;
}
