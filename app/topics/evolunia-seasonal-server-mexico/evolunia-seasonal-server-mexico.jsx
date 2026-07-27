import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-mexico');
}

export default function EvoluniaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-mexico" />;
}
