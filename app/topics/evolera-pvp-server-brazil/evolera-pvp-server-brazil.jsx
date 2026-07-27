import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-brazil');
}

export default function EvoleraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-brazil" />;
}
