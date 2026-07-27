import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-players-online-north-america');
}

export default function WithActivePlayersPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-players-online-north-america" />;
}
