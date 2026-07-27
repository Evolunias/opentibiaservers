import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-germany');
}

export default function TibiaraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-germany" />;
}
