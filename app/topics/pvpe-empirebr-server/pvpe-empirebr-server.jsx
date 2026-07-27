import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-empirebr-server');
}

export default function PvpeEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-empirebr-server" />;
}
