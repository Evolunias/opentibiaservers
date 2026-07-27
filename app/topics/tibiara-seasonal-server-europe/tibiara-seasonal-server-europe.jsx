import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-europe');
}

export default function TibiaraSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-europe" />;
}
