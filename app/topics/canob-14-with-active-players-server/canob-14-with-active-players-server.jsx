import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-with-active-players-server');
}

export default function Canob14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-with-active-players-server" />;
}
