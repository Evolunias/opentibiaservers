import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-argentina');
}

export default function EvoluniaSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-argentina" />;
}
