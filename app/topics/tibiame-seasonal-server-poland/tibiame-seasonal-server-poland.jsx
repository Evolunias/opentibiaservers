import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-poland');
}

export default function TibiameSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-poland" />;
}
