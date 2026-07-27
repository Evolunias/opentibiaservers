import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-sweden');
}

export default function PvpPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-sweden" />;
}
