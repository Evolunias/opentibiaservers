import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-brazil');
}

export default function PvpPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-brazil" />;
}
