import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-realesta-server');
}

export default function WithActivePlayersRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-realesta-server" />;
}
