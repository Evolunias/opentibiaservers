import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-north-america');
}

export default function TibiameSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-north-america" />;
}
