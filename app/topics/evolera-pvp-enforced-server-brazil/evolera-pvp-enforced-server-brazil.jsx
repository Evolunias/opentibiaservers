import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-brazil');
}

export default function EvoleraPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-brazil" />;
}
