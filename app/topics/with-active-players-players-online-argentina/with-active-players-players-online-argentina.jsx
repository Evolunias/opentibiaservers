import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-argentina');
}

export default function WithActivePlayersPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-argentina" />;
}
