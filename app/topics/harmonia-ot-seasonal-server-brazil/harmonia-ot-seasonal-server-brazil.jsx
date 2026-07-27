import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-brazil');
}

export default function HarmoniaOtSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-brazil" />;
}
