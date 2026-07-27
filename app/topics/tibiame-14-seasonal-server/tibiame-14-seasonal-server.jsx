import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-14-seasonal-server');
}

export default function Tibiame14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-14-seasonal-server" />;
}
