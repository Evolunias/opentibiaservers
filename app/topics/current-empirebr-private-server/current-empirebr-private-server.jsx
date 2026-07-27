import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-private-server');
}

export default function CurrentEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-private-server" />;
}
