import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-europe');
}

export default function NonPvpPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-europe" />;
}
