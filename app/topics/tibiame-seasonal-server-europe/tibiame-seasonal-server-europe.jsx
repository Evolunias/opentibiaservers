import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-europe');
}

export default function TibiameSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-europe" />;
}
