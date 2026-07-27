import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-south-america');
}

export default function BlazeraSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-south-america" />;
}
