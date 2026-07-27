import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-server');
}

export default function HighrateEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-server" />;
}
