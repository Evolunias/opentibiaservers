import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-empirebr-server');
}

export default function EvoEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="evo-empirebr-server" />;
}
