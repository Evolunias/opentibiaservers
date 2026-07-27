import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-latin-america');
}

export default function EvoluniaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-latin-america" />;
}
