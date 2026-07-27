import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-poland');
}

export default function EvoluniaSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-poland" />;
}
