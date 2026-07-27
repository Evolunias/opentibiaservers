import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-ot-server');
}

export default function NoResetEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-ot-server" />;
}
