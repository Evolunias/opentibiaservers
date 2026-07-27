import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-europe');
}

export default function WithActivePlayersPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-europe" />;
}
