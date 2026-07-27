import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-argentina');
}

export default function EvoleraSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-argentina" />;
}
