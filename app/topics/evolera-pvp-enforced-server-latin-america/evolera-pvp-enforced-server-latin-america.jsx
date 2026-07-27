import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-enforced-server-latin-america');
}

export default function EvoleraPvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-enforced-server-latin-america" />;
}
