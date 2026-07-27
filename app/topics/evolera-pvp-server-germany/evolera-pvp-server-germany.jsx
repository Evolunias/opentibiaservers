import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-germany');
}

export default function EvoleraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-germany" />;
}
