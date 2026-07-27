import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-canada');
}

export default function TibiameSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-canada" />;
}
