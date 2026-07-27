import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-seasonal-server');
}

export default function Tibiame12SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-seasonal-server" />;
}
