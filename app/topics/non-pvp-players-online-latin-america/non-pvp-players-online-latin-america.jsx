import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-latin-america');
}

export default function NonPvpPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-latin-america" />;
}
