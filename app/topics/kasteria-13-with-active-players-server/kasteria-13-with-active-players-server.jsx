import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-with-active-players-server');
}

export default function Kasteria13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-with-active-players-server" />;
}
