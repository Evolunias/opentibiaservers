import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-with-active-players-guide');
}

export default function Tibia71WithActivePlayersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-with-active-players-guide" />;
}
