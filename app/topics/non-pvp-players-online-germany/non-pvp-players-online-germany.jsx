import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-germany');
}

export default function NonPvpPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-germany" />;
}
