import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-europe');
}

export default function KasteriaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-europe" />;
}
