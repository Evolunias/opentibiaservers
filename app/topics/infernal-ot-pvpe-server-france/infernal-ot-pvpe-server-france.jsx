import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-pvpe-server-france');
}

export default function InfernalOtPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-pvpe-server-france" />;
}
