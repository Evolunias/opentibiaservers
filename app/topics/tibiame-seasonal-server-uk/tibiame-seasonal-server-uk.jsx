import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-uk');
}

export default function TibiameSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-uk" />;
}
