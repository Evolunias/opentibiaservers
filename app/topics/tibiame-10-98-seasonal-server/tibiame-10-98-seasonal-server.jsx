import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-10-98-seasonal-server');
}

export default function Tibiame1098SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-10-98-seasonal-server" />;
}
