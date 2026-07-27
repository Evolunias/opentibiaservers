import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-germany');
}

export default function InfernalOtPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-germany" />;
}
