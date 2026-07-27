import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-south-america');
}

export default function AlasteraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-south-america" />;
}
