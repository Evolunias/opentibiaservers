import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-active-players-guide');
}

export default function Tibia14WithActivePlayersGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-active-players-guide" />;
}
