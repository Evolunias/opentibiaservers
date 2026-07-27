import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-latin-america');
}

export default function TibiameSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-latin-america" />;
}
