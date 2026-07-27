import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-11-seasonal-server');
}

export default function Tibiame11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-11-seasonal-server" />;
}
