import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-server');
}

export default function NoResetEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-server" />;
}
