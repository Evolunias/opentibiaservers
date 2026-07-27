import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-brazil');
}

export default function EvoleraSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-brazil" />;
}
