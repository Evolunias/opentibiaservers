import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-usa');
}

export default function EvoleraPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-usa" />;
}
