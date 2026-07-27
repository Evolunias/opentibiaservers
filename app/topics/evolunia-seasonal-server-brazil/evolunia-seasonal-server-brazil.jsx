import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-brazil');
}

export default function EvoluniaSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-brazil" />;
}
