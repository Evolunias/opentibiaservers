import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-north-america');
}

export default function BlazeraSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-north-america" />;
}
