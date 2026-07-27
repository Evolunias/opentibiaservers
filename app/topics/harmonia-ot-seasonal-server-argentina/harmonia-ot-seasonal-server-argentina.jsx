import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-seasonal-server-argentina');
}

export default function HarmoniaOtSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-seasonal-server-argentina" />;
}
