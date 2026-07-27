import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-mexico');
}

export default function PvpEnforcedPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-mexico" />;
}
