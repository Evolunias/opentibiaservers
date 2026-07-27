import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-with-active-players-server');
}

export default function Kasteria11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-with-active-players-server" />;
}
