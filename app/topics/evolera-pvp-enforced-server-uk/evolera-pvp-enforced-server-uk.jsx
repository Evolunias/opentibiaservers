import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-uk');
}

export default function EvoleraPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-uk" />;
}
