import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-9-6-pvpe-server');
}

export default function InfernalOt96PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-9-6-pvpe-server" />;
}
