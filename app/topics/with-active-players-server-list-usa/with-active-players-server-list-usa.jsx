import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-server-list-usa');
}

export default function WithActivePlayersServerListUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-server-list-usa" />;
}
