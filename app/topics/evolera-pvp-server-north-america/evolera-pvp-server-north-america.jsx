import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-north-america');
}

export default function EvoleraPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-north-america" />;
}
