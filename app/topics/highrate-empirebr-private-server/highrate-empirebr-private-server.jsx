import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-private-server');
}

export default function HighrateEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-private-server" />;
}
