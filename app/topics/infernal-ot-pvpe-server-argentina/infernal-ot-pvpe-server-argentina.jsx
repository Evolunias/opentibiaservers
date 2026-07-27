import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-argentina');
}

export default function InfernalOtPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-argentina" />;
}
