import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-usa');
}

export default function EvoluniaSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-usa" />;
}
