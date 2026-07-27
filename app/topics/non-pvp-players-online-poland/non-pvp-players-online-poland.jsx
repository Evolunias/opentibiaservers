import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-poland');
}

export default function NonPvpPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-poland" />;
}
