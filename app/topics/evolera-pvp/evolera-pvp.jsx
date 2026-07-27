import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp');
}

export default function EvoleraPvpKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp" />;
}
