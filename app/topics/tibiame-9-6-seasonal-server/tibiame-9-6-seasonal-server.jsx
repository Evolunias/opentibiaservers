import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-seasonal-server');
}

export default function Tibiame96SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-seasonal-server" />;
}
