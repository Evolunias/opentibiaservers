import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-north-america');
}

export default function TibiaraSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-north-america" />;
}
