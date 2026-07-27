import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-with-active-players-server');
}

export default function Kasteria84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-with-active-players-server" />;
}
