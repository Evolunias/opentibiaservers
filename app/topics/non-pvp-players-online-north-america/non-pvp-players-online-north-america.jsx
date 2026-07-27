import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-north-america');
}

export default function NonPvpPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-north-america" />;
}
