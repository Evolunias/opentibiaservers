import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-usa');
}

export default function BlazeraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-usa" />;
}
