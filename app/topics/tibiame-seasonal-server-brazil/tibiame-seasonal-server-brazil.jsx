import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-brazil');
}

export default function TibiameSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-brazil" />;
}
