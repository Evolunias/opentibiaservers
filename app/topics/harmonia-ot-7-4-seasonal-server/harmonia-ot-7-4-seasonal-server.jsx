import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-7-4-seasonal-server');
}

export default function HarmoniaOt74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-7-4-seasonal-server" />;
}
