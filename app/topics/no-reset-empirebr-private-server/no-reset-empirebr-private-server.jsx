import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-private-server');
}

export default function NoResetEmpirebrPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-private-server" />;
}
