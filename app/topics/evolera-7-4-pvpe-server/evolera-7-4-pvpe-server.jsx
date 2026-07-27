import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-pvpe-server');
}

export default function Evolera74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-pvpe-server" />;
}
