import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-france');
}

export default function EvoleraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-france" />;
}
