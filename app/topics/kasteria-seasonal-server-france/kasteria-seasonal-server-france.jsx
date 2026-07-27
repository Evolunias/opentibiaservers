import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-france');
}

export default function KasteriaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-france" />;
}
