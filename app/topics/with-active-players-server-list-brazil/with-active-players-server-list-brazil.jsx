import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-brazil');
}

export default function WithActivePlayersServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-brazil" />;
}
