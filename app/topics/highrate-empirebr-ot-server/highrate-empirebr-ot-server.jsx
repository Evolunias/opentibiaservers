import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-ot-server');
}

export default function HighrateEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-ot-server" />;
}
