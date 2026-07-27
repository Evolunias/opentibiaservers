import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-south-america');
}

export default function TibiaraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-south-america" />;
}
