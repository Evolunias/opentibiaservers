import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-france');
}

export default function TibiaraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-france" />;
}
