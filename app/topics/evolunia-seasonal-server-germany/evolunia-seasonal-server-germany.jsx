import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-germany');
}

export default function EvoluniaSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-germany" />;
}
