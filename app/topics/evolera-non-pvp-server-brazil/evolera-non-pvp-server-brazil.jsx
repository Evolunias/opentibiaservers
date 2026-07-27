import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-brazil');
}

export default function EvoleraNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-brazil" />;
}
