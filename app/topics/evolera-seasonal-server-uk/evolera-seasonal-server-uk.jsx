import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-uk');
}

export default function EvoleraSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-uk" />;
}
