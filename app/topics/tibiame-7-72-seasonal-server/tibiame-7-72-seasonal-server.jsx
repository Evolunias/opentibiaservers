import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-7-72-seasonal-server');
}

export default function Tibiame772SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-7-72-seasonal-server" />;
}
