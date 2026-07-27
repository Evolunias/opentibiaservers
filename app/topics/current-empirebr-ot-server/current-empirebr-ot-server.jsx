import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-ot-server');
}

export default function CurrentEmpirebrOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-ot-server" />;
}
