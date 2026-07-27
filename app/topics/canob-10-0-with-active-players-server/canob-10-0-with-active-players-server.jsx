import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-with-active-players-server');
}

export default function Canob100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-with-active-players-server" />;
}
