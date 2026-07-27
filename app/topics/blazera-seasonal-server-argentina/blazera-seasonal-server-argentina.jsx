import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-argentina');
}

export default function BlazeraSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-argentina" />;
}
