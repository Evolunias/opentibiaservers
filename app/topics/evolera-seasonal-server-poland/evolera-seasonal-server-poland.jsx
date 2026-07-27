import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-poland');
}

export default function EvoleraSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-poland" />;
}
