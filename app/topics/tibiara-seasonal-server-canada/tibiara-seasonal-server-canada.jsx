import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-canada');
}

export default function TibiaraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-canada" />;
}
