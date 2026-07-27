import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-argentina');
}

export default function EvoleraPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-argentina" />;
}
