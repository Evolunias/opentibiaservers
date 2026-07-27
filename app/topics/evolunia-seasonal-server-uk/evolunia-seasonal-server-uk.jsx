import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-uk');
}

export default function EvoluniaSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-uk" />;
}
