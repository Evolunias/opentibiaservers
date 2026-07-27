import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-pvpe-server');
}

export default function InfernalOt11PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-pvpe-server" />;
}
