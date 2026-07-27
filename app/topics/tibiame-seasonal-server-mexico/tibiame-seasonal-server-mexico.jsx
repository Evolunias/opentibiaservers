import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-mexico');
}

export default function TibiameSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-mexico" />;
}
