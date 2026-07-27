import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-europe');
}

export default function EvoluniaSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-europe" />;
}
