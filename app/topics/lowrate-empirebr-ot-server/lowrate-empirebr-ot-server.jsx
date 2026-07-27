import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-ot-server');
}

export default function LowrateEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-ot-server" />;
}
