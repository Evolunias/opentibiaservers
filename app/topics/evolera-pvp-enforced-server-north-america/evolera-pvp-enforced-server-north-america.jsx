import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-north-america');
}

export default function EvoleraPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-north-america" />;
}
