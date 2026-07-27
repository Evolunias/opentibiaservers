import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-ot-server');
}

export default function TopEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-ot-server" />;
}
