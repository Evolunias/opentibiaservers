import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-argentina');
}

export default function TibiameSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-argentina" />;
}
