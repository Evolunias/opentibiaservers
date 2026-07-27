import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-8-4-seasonal-server');
}

export default function Tibiame84SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-8-4-seasonal-server" />;
}
