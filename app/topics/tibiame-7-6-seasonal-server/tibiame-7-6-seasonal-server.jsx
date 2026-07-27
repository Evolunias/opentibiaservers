import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-6-seasonal-server');
}

export default function Tibiame76SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-6-seasonal-server" />;
}
