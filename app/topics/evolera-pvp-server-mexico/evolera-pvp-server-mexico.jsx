import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-mexico');
}

export default function EvoleraPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-mexico" />;
}
