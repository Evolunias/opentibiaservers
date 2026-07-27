import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-latin-america');
}

export default function PvpEnforcedPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-latin-america" />;
}
