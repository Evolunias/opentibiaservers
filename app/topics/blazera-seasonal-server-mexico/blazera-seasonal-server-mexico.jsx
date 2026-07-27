import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-mexico');
}

export default function BlazeraSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-mexico" />;
}
