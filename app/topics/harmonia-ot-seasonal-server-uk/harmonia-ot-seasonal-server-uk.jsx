import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-uk');
}

export default function HarmoniaOtSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-uk" />;
}
