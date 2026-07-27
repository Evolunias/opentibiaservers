import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-seasonal-server-europe');
}

export default function EvoleraSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolera-seasonal-server-europe" />;
}
