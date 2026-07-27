import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-canada');
}

export default function HarmoniaOtSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-canada" />;
}
