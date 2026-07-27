import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-south-america');
}

export default function HarmoniaOtSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-south-america" />;
}
