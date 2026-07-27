import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-54-seasonal-server');
}

export default function HarmoniaOt854SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-54-seasonal-server" />;
}
