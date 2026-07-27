import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-players-online-france');
}

export default function SeasonalPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-players-online-france" />;
}
