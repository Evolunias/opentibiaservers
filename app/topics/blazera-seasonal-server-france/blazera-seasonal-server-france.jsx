import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-france');
}

export default function BlazeraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-france" />;
}
