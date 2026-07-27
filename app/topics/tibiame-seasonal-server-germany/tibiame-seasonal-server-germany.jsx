import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-germany');
}

export default function TibiameSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-germany" />;
}
