import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-6-seasonal-server');
}

export default function Tibiame86SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-6-seasonal-server" />;
}
