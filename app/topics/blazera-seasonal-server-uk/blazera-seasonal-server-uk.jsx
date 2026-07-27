import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-uk');
}

export default function BlazeraSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-uk" />;
}
