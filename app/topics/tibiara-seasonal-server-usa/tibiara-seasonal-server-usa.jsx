import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-usa');
}

export default function TibiaraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-usa" />;
}
