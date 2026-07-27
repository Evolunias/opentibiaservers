import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-argentina');
}

export default function EvoleraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-argentina" />;
}
