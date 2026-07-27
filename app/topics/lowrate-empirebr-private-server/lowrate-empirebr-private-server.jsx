import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-private-server');
}

export default function LowrateEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-private-server" />;
}
