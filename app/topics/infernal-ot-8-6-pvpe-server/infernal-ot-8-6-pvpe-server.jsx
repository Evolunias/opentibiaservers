import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-6-pvpe-server');
}

export default function InfernalOt86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-6-pvpe-server" />;
}
