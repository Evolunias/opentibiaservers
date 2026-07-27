import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-mexico');
}

export default function EvoleraPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-mexico" />;
}
