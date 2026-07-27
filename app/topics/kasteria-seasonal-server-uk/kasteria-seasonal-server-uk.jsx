import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-uk');
}

export default function KasteriaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-uk" />;
}
