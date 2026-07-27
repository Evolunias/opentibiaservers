import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-poland');
}

export default function WithActivePlayersPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-poland" />;
}
