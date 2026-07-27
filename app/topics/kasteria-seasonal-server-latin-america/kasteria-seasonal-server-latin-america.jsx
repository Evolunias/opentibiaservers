import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-latin-america');
}

export default function KasteriaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-latin-america" />;
}
