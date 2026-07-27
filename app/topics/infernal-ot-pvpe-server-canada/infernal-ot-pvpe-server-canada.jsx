import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-canada');
}

export default function InfernalOtPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-canada" />;
}
