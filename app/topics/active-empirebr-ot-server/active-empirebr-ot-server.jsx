import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-ot-server');
}

export default function ActiveEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-ot-server" />;
}
