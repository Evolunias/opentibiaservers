import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-with-active-players-server');
}

export default function Realesta100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-with-active-players-server" />;
}
