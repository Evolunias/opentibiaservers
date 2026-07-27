import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-latin-america');
}

export default function HarmoniaOtSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-latin-america" />;
}
