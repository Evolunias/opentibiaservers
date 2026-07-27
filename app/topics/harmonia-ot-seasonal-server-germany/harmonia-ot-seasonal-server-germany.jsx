import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-germany');
}

export default function HarmoniaOtSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-germany" />;
}
