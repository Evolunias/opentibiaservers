import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-54-seasonal-server');
}

export default function Tibiame854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-54-seasonal-server" />;
}
