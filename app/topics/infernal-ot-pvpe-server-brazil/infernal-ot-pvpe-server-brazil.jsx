import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-brazil');
}

export default function InfernalOtPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-brazil" />;
}
