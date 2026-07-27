import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-canada');
}

export default function EvoleraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-canada" />;
}
