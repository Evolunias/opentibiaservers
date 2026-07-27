import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-private-server');
}

export default function TopEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-private-server" />;
}
