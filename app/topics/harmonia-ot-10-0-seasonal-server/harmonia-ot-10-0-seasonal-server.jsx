import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-seasonal-server');
}

export default function HarmoniaOt100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-seasonal-server" />;
}
