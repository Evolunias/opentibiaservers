import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-brazil');
}

export default function BlazeraSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-brazil" />;
}
