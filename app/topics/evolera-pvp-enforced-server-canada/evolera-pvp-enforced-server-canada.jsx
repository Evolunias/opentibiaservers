import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-canada');
}

export default function EvoleraPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-canada" />;
}
