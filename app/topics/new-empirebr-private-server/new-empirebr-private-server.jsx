import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-private-server');
}

export default function NewEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-private-server" />;
}
