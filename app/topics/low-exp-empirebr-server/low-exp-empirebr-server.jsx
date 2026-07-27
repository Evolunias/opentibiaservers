import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-empirebr-server');
}

export default function LowExpEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-empirebr-server" />;
}
