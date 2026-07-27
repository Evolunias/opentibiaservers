import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-canada');
}

export default function NonPvpPlayersOnlineCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-canada" />;
}
