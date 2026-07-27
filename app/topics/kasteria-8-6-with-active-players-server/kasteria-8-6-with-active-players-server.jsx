import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-with-active-players-server');
}

export default function Kasteria86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-with-active-players-server" />;
}
