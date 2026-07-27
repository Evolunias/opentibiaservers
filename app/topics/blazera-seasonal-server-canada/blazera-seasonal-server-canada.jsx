import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-canada');
}

export default function BlazeraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-canada" />;
}
