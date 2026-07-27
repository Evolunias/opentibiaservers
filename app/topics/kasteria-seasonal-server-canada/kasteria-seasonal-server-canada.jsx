import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-canada');
}

export default function KasteriaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-canada" />;
}
