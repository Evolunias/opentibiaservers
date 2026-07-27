import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-usa');
}

export default function EvoleraSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-usa" />;
}
