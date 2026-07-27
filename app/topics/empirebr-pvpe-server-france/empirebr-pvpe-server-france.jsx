import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-pvpe-server-france');
}

export default function EmpirebrPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="empirebr-pvpe-server-france" />;
}
