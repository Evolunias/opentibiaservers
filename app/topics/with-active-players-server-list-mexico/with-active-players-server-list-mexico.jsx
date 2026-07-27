import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-mexico');
}

export default function WithActivePlayersServerListMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-mexico" />;
}
