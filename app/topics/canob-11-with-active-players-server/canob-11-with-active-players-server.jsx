import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-with-active-players-server');
}

export default function Canob11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-with-active-players-server" />;
}
