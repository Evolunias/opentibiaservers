import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-with-active-players-server');
}

export default function Canob81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-with-active-players-server" />;
}
