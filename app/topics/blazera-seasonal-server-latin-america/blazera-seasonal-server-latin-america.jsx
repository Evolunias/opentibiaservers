import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-seasonal-server-latin-america');
}

export default function BlazeraSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="blazera-seasonal-server-latin-america" />;
}
