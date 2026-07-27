import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-uk');
}

export default function EvoleraPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-uk" />;
}
