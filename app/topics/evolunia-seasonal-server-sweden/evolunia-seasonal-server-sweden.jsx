import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-seasonal-server-sweden');
}

export default function EvoluniaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-seasonal-server-sweden" />;
}
