import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-canada');
}

export default function EvoluniaSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-canada" />;
}
