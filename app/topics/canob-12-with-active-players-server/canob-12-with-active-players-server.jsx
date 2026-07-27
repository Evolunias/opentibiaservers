import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-with-active-players-server');
}

export default function Canob12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-with-active-players-server" />;
}
