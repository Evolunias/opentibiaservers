import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-sweden');
}

export default function NonPvpPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-sweden" />;
}
