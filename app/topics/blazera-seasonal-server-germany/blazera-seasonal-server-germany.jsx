import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-germany');
}

export default function BlazeraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-germany" />;
}
