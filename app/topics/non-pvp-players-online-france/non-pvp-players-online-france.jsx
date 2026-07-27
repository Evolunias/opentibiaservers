import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-players-online-france');
}

export default function NonPvpPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-players-online-france" />;
}
