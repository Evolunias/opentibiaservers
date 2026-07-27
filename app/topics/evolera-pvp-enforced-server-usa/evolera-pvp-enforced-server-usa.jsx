import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-usa');
}

export default function EvoleraPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-usa" />;
}
