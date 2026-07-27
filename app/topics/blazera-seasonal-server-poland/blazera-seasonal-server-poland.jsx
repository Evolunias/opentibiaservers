import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-poland');
}

export default function BlazeraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-poland" />;
}
