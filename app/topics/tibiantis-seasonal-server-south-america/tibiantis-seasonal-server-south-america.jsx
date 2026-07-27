import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-south-america');
}

export default function TibiantisSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-south-america" />;
}
