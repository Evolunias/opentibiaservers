import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-with-active-players-server');
}

export default function Canob13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-with-active-players-server" />;
}
