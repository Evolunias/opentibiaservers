import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-pvp-server-south-america');
}

export default function EvoleraPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-pvp-server-south-america" />;
}
