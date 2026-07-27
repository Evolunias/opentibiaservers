import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-private-server');
}

export default function ActiveEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-private-server" />;
}
