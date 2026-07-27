import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-brazil');
}

export default function TibiaraSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-brazil" />;
}
