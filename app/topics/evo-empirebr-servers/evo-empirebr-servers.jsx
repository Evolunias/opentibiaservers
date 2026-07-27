import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-empirebr-servers');
}

export default function EvoEmpirebrServersKeywordPage() {
  return <StaticKeywordPage slug="evo-empirebr-servers" />;
}
