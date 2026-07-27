import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-germany');
}

export default function EvoleraSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-germany" />;
}
