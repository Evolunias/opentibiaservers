import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-france');
}

export default function HarmoniaOtSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-france" />;
}
