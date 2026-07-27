import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-latin-america');
}

export default function InfernalOtPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-latin-america" />;
}
