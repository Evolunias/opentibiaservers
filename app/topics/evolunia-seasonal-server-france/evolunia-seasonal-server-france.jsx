import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-france');
}

export default function EvoluniaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-france" />;
}
