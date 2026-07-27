import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-with-active-players-server');
}

export default function Kasteria96WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-with-active-players-server" />;
}
