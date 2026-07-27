import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-france');
}

export default function RubinotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-france" />;
}
