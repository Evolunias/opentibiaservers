import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-argentina');
}

export default function NonPvpPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-argentina" />;
}
