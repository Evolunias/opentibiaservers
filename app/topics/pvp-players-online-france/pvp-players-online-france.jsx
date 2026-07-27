import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-players-online-france');
}

export default function PvpPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="pvp-players-online-france" />;
}
