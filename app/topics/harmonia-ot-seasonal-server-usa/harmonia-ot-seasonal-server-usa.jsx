import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-usa');
}

export default function HarmoniaOtSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-usa" />;
}
