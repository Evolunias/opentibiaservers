import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-with-active-players-server');
}

export default function Realesta11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-with-active-players-server" />;
}
