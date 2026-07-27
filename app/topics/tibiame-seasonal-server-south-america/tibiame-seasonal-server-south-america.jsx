import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-south-america');
}

export default function TibiameSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-south-america" />;
}
