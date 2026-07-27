import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-14-seasonal-server');
}

export default function Tibiara14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-14-seasonal-server" />;
}
