import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-mexico');
}

export default function InfernalOtPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-mexico" />;
}
