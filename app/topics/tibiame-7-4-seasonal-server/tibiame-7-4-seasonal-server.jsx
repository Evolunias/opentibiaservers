import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-4-seasonal-server');
}

export default function Tibiame74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-4-seasonal-server" />;
}
