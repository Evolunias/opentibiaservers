import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-south-america');
}

export default function EvoleraPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-south-america" />;
}
