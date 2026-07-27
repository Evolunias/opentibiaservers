import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-argentina');
}

export default function EvoleraNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-argentina" />;
}
