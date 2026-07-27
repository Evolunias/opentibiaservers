import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-seasonal-server');
}

export default function HarmoniaOt13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-seasonal-server" />;
}
