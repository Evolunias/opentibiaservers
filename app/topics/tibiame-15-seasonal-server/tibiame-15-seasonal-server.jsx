import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-15-seasonal-server');
}

export default function Tibiame15SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-15-seasonal-server" />;
}
