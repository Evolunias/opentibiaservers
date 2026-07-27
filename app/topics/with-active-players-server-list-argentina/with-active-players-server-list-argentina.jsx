import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-argentina');
}

export default function WithActivePlayersServerListArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-argentina" />;
}
