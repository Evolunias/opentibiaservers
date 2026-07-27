import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-germany');
}

export default function EvoleraNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-germany" />;
}
