import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-with-active-players-server');
}

export default function Canob15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-with-active-players-server" />;
}
