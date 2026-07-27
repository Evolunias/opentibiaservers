import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-players-online-france');
}

export default function PvpEnforcedPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-players-online-france" />;
}
