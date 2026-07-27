import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-players-online-france');
}

export default function PvpePlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-players-online-france" />;
}
