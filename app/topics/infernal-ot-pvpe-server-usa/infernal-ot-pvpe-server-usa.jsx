import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-usa');
}

export default function InfernalOtPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-usa" />;
}
