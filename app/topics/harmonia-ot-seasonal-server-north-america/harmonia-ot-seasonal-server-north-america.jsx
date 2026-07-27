import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-north-america');
}

export default function HarmoniaOtSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-north-america" />;
}
