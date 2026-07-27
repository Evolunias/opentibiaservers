import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-canada');
}

export default function EvoleraSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-canada" />;
}
