import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-europe');
}

export default function BlazeraSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-europe" />;
}
