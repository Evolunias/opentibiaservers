import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-private-server');
}

export default function BestEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-private-server" />;
}
