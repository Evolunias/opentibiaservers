import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-empirebr-server');
}

export default function HighExpEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-empirebr-server" />;
}
