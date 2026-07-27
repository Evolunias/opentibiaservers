import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-ot-server');
}

export default function BestEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-ot-server" />;
}
