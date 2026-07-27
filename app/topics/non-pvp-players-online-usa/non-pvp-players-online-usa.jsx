import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-usa');
}

export default function NonPvpPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-usa" />;
}
