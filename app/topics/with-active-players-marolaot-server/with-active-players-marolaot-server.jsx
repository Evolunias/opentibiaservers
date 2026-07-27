import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-marolaot-server');
}

export default function WithActivePlayersMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-marolaot-server" />;
}
