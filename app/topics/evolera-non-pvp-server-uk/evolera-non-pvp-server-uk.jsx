import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-uk');
}

export default function EvoleraNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-uk" />;
}
