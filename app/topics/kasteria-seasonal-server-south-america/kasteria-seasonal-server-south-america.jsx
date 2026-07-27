import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-seasonal-server-south-america');
}

export default function KasteriaSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-seasonal-server-south-america" />;
}
