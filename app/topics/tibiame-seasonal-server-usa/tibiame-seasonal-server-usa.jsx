import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-usa');
}

export default function TibiameSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-usa" />;
}
