import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-14-seasonal-server');
}

export default function HarmoniaOt14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-14-seasonal-server" />;
}
