import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-8-1-with-active-players-server');
}

export default function Arcaniarl81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-8-1-with-active-players-server" />;
}
