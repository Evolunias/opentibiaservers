import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-sweden');
}

export default function BlazeraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-sweden" />;
}
