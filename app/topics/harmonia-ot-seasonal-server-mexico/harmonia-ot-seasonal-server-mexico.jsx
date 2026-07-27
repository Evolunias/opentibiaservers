import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-mexico');
}

export default function HarmoniaOtSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-mexico" />;
}
