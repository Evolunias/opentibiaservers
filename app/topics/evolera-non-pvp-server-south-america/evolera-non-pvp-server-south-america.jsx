import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-non-pvp-server-south-america');
}

export default function EvoleraNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-non-pvp-server-south-america" />;
}
