import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-north-america');
}

export default function KasteriaSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-north-america" />;
}
