import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-0-seasonal-server');
}

export default function Tibiame100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-0-seasonal-server" />;
}
