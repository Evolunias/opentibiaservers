import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-pvpe-server');
}

export default function InfernalOt12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-pvpe-server" />;
}
