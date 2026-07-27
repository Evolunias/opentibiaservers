import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-server');
}

export default function LowrateEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-server" />;
}
