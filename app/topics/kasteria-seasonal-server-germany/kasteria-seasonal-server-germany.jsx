import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-germany');
}

export default function KasteriaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-germany" />;
}
