import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-with-active-players-server');
}

export default function Kasteria12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-with-active-players-server" />;
}
