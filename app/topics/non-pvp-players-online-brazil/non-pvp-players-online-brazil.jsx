import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-brazil');
}

export default function NonPvpPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-brazil" />;
}
