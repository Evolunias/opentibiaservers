import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-germany');
}

export default function WithActivePlayersPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-germany" />;
}
