import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-usa');
}

export default function WithActivePlayersPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-usa" />;
}
