import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-brazil');
}

export default function PvpEnforcedPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-brazil" />;
}
